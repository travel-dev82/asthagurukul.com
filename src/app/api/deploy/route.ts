import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

/**
 * Deployment API Endpoint
 * 
 * This endpoint accepts any payload and triggers the deploy.js script.
 * The deployment runs in the background and the API returns immediately.
 * 
 * POST /api/deploy
 * Body: Any JSON payload (ignored)
 * 
 * Response:
 *   - 200: Deployment triggered successfully
 *   - 500: Failed to trigger deployment
 */
export async function POST(request: Request) {
  try {
    // Accept any payload without validation
    try {
      await request.json();
    } catch {
      // Ignore JSON parsing errors - we accept any payload
    }

    // Get the project root directory
    const projectRoot = process.cwd();
    
    // Path to the deploy script
    const deployScriptPath = path.join(projectRoot, "scripts", "deploy.js");
    
    console.log(`[deploy-api] Triggering deployment from: ${projectRoot}`);
    console.log(`[deploy-api] Deploy script: ${deployScriptPath}`);

    // Check if deploy script exists
    if (!fs.existsSync(deployScriptPath)) {
      return NextResponse.json(
        {
          success: false,
          message: "Deploy script not found",
          path: deployScriptPath,
        },
        { status: 500 }
      );
    }

    // Use exec with shell command to avoid Turbopack path resolution issues
    // The '&' at the end runs the process in background (Linux/Mac)
    // For Windows compatibility, we use a different approach
    const isWindows = process.platform === "win32";
    const backgroundCommand = isWindows 
      ? `start /B node "${deployScriptPath}"`
      : `node "${deployScriptPath}" &`;
    
    exec(backgroundCommand, {
      cwd: projectRoot,
      env: {
        ...process.env,
        DEPLOY_TRIGGERED_BY: "api",
        DEPLOY_TRIGGERED_AT: new Date().toISOString(),
      },
    }, (error) => {
      if (error) {
        console.error(`[deploy-api] Deployment error: ${error.message}`);
      }
    });

    console.log(`[deploy-api] Deployment process started`);

    // Return immediately - deployment runs in background
    return NextResponse.json({
      success: true,
      message: "Deployment triggered successfully",
      timestamp: new Date().toISOString(),
      projectRoot: projectRoot,
    });
  } catch (error) {
    console.error("[deploy-api] Error triggering deployment:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to trigger deployment",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for deployment status/info
 */
export async function GET() {
  const projectRoot = process.cwd();
  
  // Check if deployment is in progress (lock file exists)
  const lockFilePath = path.join(projectRoot, ".deploy.lock");
  let isDeploying = false;
  let lockInfo: { pid?: number; timestamp?: string; cwd?: string; stale?: boolean } | null = null;
  
  try {
    if (fs.existsSync(lockFilePath)) {
      isDeploying = true;
      lockInfo = JSON.parse(fs.readFileSync(lockFilePath, "utf-8"));
      
      // Check if lock is stale (older than 30 minutes)
      if (lockInfo?.timestamp) {
        const lockAge = Date.now() - new Date(lockInfo.timestamp).getTime();
        if (lockAge > 30 * 60 * 1000) {
          isDeploying = false;
          lockInfo.stale = true;
        }
      }
    }
  } catch {
    // Ignore errors reading lock file
  }
  
  return NextResponse.json({
    endpoint: "/api/deploy",
    method: "POST",
    description: "Trigger deployment by pulling latest code and rebuilding",
    projectRoot: projectRoot,
    deploymentStatus: isDeploying ? "in_progress" : "idle",
    lockInfo: lockInfo,
  });
}
