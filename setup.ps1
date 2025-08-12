param(
    [Parameter(Mandatory=$true)]
    [string]$ProjectName,
    
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$ProjectDescription = "Project documentation built with Docusaurus"
)

Write-Host "Setting up project: $ProjectName" -ForegroundColor Green
Write-Host "GitHub Username: $GitHubUsername" -ForegroundColor Cyan
Write-Host "Description: $ProjectDescription" -ForegroundColor Cyan

# Convert project name to lowercase with hyphens
$ProjectNameLower = $ProjectName.ToLower().Replace(" ", "-")
$ProjectUrl = "https://$GitHubUsername.github.io"

Write-Host "URL: $ProjectUrl" -ForegroundColor Cyan
Write-Host ""

# Update package.json
Write-Host "Updating package.json..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" | ConvertFrom-Json
$packageJson.name = $ProjectNameLower
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"

# Update docusaurus.config.ts
Write-Host "Updating docusaurus.config.ts..." -ForegroundColor Yellow
$configContent = Get-Content "docusaurus.config.ts" -Raw

$configContent = $configContent -replace 'title: .*', "title: '$ProjectName',"
$configContent = $configContent -replace 'tagline: .*', "tagline: '$ProjectDescription',"
$configContent = $configContent -replace 'url: .*', "url: '$ProjectUrl',"
$configContent = $configContent -replace 'baseUrl: .*', "baseUrl: '/$ProjectNameLower/',"
$configContent = $configContent -replace 'organizationName: .*', "organizationName: '$GitHubUsername',"
$configContent = $configContent -replace 'projectName: .*', "projectName: '$ProjectNameLower',"

$configContent | Set-Content "docusaurus.config.ts"

# Update README.md
Write-Host "Updating README.md..." -ForegroundColor Yellow
$readmeContent = Get-Content "README.md" -Raw

$readmeContent = $readmeContent -replace 'yourusername/docs-boilerplate', "$GitHubUsername/$ProjectNameLower"
$readmeContent = $readmeContent -replace 'Docs Boilerplate', $ProjectName
$readmeContent = $readmeContent -replace 'A ready-to-use documentation template built with Docusaurus', $ProjectDescription
$readmeContent = $readmeContent -replace 'yourusername/your-repo-name', "$GitHubUsername/$ProjectNameLower"
$readmeContent = $readmeContent -replace 'Your Project Name', $ProjectName
$readmeContent = $readmeContent -replace 'Your project description', $ProjectDescription
$readmeContent = $readmeContent -replace 'yourusername\.github\.io', "$GitHubUsername.github.io"
$readmeContent = $readmeContent -replace 'your-repo-name', $ProjectNameLower
$readmeContent = $readmeContent -replace 'docs-boilerplate/', "$ProjectNameLower/"

$readmeContent | Set-Content "README.md"

# Update LICENSE
Write-Host "Updating LICENSE..." -ForegroundColor Yellow
$licenseContent = Get-Content "LICENSE" -Raw
$licenseContent = $licenseContent -replace 'Copyright \(c\) 2025 Docs Boilerplate', "Copyright (c) $(Get-Date -Format 'yyyy') $ProjectName"
$licenseContent | Set-Content "LICENSE"

# Create .env file
Write-Host "Creating .env file..." -ForegroundColor Yellow
$envContent = "PROJECT_NAME=$ProjectName`nGITHUB_USERNAME=$GitHubUsername`nPROJECT_DESCRIPTION=$ProjectDescription`nPROJECT_URL=$ProjectUrl"
$envContent | Set-Content ".env"

Write-Host ""
Write-Host "Project setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary of changes:" -ForegroundColor Cyan
Write-Host "  Project name: $ProjectName"
Write-Host "  GitHub username: $GitHubUsername"
Write-Host "  Project URL: $ProjectUrl"
Write-Host "  Documentation URL: $ProjectUrl/$ProjectNameLower/"
Write-Host ""
Write-Host "Next: npm start (to test locally) or npm run build (to build for production)" -ForegroundColor Green
