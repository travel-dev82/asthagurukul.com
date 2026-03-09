/**
 * PM2 Ecosystem Configuration for Astha Gurukul
 * 
 * This configuration file is used by PM2 to manage the Next.js application.
 * It works seamlessly with CloudPanel's Node.js deployment.
 * 
 * Usage:
 *   pm2 start ecosystem.config.js              # Start the app
 *   pm2 start ecosystem.config.js --env prod   # Start with production env
 *   pm2 restart ecosystem.config.js            # Restart the app
 *   pm2 stop ecosystem.config.js               # Stop the app
 *   pm2 delete ecosystem.config.js             # Remove from PM2
 *   pm2 logs asthagurukul                      # View logs
 *   pm2 monit                                  # Monitor resources
 * 
 * CloudPanel Setup:
 *   1. Go to your site > Node.js App
 *   2. Set Port: 3000 (or custom port)
 *   3. Startup File: ecosystem.config.js
 *   4. Environment variables can be set here or in .env file
 */

module.exports = {
  apps: [
    {
      // Application name (used in PM2 commands)
      name: 'asthagurukul',

      // Script to run (Next.js standalone server)
      script: '.next/standalone/server.js',

      // ============================================
      // PORT CONFIGURATION
      // ============================================
      // Priority order for port:
      // 1. CloudPanel environment variable (PORT)
      // 2. This env.PORT below
      // 3. Default Next.js port (3000)
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
      },

      // Production-specific environment (used with --env prod)
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
      },

      // ============================================
      // PROCESS MANAGEMENT
      // ============================================
      // Number of instances (max = all CPU cores, 1 = single instance)
      instances: 1,

      // Execution mode (cluster or fork)
      // Use 'fork' for Next.js standalone
      exec_mode: 'fork',

      // Auto-restart on file changes (disable in production)
      watch: false,

      // Ignore these directories for watching
      ignore_watch: ['node_modules', '.next', 'logs', 'public'],

      // Maximum memory before restart (0 = unlimited)
      max_memory_restart: '500M',

      // ============================================
      // LOGGING
      // ============================================
      // Log file paths
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Output log (stdout)
      out_file: './logs/out.log',
      
      // Error log (stderr)
      error_file: './logs/error.log',
      
      // Combined log
      merge_logs: true,

      // Add timestamp to logs
      time: true,

      // ============================================
      // RELIABILITY
      // ============================================
      // Auto-restart on crash
      autorestart: true,

      // Maximum restarts within min_uptime (prevents restart loops)
      max_restarts: 10,

      // Minimum uptime before considering app "stable" (ms)
      min_uptime: '10s',

      // Wait before restart after crash (ms)
      restart_delay: 1000,

      // Kill process if it takes too long to stop (ms)
      kill_timeout: 5000,

      // Listen for shutdown signals
      listen_timeout: 3000,

      // ============================================
      // CRON RESTART (Optional)
      // ============================================
      // Uncomment to restart at specific times
      // cron_restart: '0 3 * * *',  // Restart daily at 3 AM

      // ============================================
      // SOURCE MAP SUPPORT
      // ============================================
      // Enable source map support for better error traces
      source_map_support: true,
    },
  ],

  // ============================================
  // DEPLOYMENT CONFIGURATION (Optional)
  // ============================================
  // For advanced deployment workflows
  deploy: {
    production: {
      user: 'asthagurukul',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:travel-dev82/asthagurukul.com.git',
      path: '/home/asthagurukul/htdocs/asthagurukul.com',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
