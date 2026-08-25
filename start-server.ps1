# Quick Start Script for Windows PowerShell
# Usage: Run this script to start the Unsplash proxy with your API key

param(
    [string]$UnsplashKey = ""
)

Write-Host "🚀 Image Search App - Server Startup Script" -ForegroundColor Cyan
Write-Host ""

if ([string]::IsNullOrWhiteSpace($UnsplashKey)) {
    Write-Host "⚠️  Unsplash API key not provided." -ForegroundColor Yellow
    Write-Host "Please provide it as an argument or set the environment variable UNSPLASH_ACCESS_KEY" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Usage:" -ForegroundColor Green
    Write-Host "  .\start-server.ps1 -UnsplashKey 'your_key_here'" -ForegroundColor Green
    Write-Host ""
    Write-Host "Or set environment variable:" -ForegroundColor Green
    Write-Host "  `$env:UNSPLASH_ACCESS_KEY='your_key_here'" -ForegroundColor Green
    Write-Host "  .\start-server.ps1" -ForegroundColor Green
    exit 1
}

# Kill any existing process on port 3000
Write-Host "🛑 Stopping any existing process on port 3000..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Milliseconds 500

# Set environment variable
Write-Host "🔑 Setting Unsplash API key..." -ForegroundColor Green
$env:UNSPLASH_ACCESS_KEY = $UnsplashKey

# Navigate to server directory
cd server

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start server
Write-Host ""
Write-Host "✅ Starting Unsplash proxy server..." -ForegroundColor Green
Write-Host "🌐 Server will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
npm start
