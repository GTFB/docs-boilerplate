#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Function to show usage
show_usage() {
    echo -e "${YELLOW}Usage:${NC}"
    echo -e "  $0 <ProjectName> <GitHubUsername> [ProjectDescription] [ProjectUrl]"
    echo -e ""
    echo -e "${YELLOW}Examples:${NC}"
    echo -e "  $0 \"My Awesome Project\" johndoe"
    echo -e "  $0 \"My Awesome Project\" johndoe \"Amazing project description\""
    echo -e "  $0 \"My Awesome Project\" johndoe \"Amazing project description\" \"https://custom-domain.com\""
    echo -e ""
    echo -e "${YELLOW}Parameters:${NC}"
    echo -e "  ProjectName        - Name of your project (required)"
    echo -e "  GitHubUsername     - Your GitHub username (required)"
    echo -e "  ProjectDescription - Description of your project (optional, default: Project documentation built with Docusaurus)"
    echo -e "  ProjectUrl         - Custom URL for your project (optional, default: https://username.github.io)"
}

# Check if required parameters are provided
if [ $# -lt 2 ]; then
    echo -e "${RED}Error: Missing required parameters${NC}"
    show_usage
    exit 1
fi

PROJECT_NAME="$1"
GITHUB_USERNAME="$2"
PROJECT_DESCRIPTION="${3:-Project documentation built with Docusaurus}"
PROJECT_URL="${4:-https://$GITHUB_USERNAME.github.io}"

echo -e "${GREEN}🚀 Setting up project: $PROJECT_NAME${NC}"
echo -e "${CYAN}GitHub Username: $GITHUB_USERNAME${NC}"
echo -e "${CYAN}Description: $PROJECT_DESCRIPTION${NC}"
echo -e "${CYAN}URL: $PROJECT_URL${NC}"
echo ""

# Convert project name to lowercase and replace spaces with hyphens
PROJECT_NAME_LOWER=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Update package.json
echo -e "${YELLOW}📦 Updating package.json...${NC}"
if command -v jq &> /dev/null; then
    jq --arg name "$PROJECT_NAME_LOWER" '.name = $name' package.json > package.json.tmp && mv package.json.tmp package.json
else
    echo -e "${YELLOW}Warning: jq not found, package.json name not updated${NC}"
fi

# Update docusaurus.config.ts
echo -e "${YELLOW}⚙️ Updating docusaurus.config.ts...${NC}"
sed -i.bak "s/title: .*/title: '$PROJECT_NAME'/g" docusaurus.config.ts
sed -i.bak "s/tagline: .*/tagline: '$PROJECT_DESCRIPTION'/g" docusaurus.config.ts
sed -i.bak "s|url: .*|url: '$PROJECT_URL'|g" docusaurus.config.ts
sed -i.bak "s|baseUrl: .*|baseUrl: '\/$PROJECT_NAME_LOWER\/'|g" docusaurus.config.ts
sed -i.bak "s/organizationName: .*/organizationName: '$GITHUB_USERNAME'/g" docusaurus.config.ts
sed -i.bak "s/projectName: .*/projectName: '$PROJECT_NAME_LOWER'/g" docusaurus.config.ts
sed -i.bak "s|editUrl:.*yourusername.*|editUrl: 'https:\/\/github.com\/$GITHUB_USERNAME\/$PROJECT_NAME_LOWER\/tree\/main\/',|g" docusaurus.config.ts
sed -i.bak "s/alt: .*/alt: '$PROJECT_NAME Logo'/g" docusaurus.config.ts
sed -i.bak "s|href: .*yourusername.*|href: 'https:\/\/github.com\/$GITHUB_USERNAME\/$PROJECT_NAME_LOWER',|g" docusaurus.config.ts
sed -i.bak "s/copyright: .*/copyright: \"Copyright © $(date +%Y) $PROJECT_NAME. Built with Docusaurus.\",/g" docusaurus.config.ts

# Remove backup files
rm -f docusaurus.config.ts.bak

# Update README.md
echo -e "${YELLOW}📖 Updating README.md...${NC}"
sed -i.bak "s/yourusername\/docs-boilerplate/$GITHUB_USERNAME\/$PROJECT_NAME_LOWER/g" README.md
sed -i.bak "s/# 📚 Docs Boilerplate/# 📚 $PROJECT_NAME/g" README.md
sed -i.bak "s/A ready-to-use documentation template built with Docusaurus/$PROJECT_DESCRIPTION/g" README.md
sed -i.bak "s/yourusername\/your-repo-name/$GITHUB_USERNAME\/$PROJECT_NAME_LOWER/g" README.md
sed -i.bak "s/Your Project Name/$PROJECT_NAME/g" README.md
sed -i.bak "s/Your project description/$PROJECT_DESCRIPTION/g" README.md
sed -i.bak "s/yourusername\.github\.io/$GITHUB_USERNAME.github.io/g" README.md
sed -i.bak "s/your-repo-name/$PROJECT_NAME_LOWER/g" README.md
sed -i.bak "s/docs-boilerplate\//$PROJECT_NAME_LOWER\//g" README.md

# Remove backup files
rm -f README.md.bak

# Update LICENSE
echo -e "${YELLOW}📄 Updating LICENSE...${NC}"
sed -i.bak "s/Copyright (c) 2025 Docs Boilerplate/Copyright (c) $(date +%Y) $PROJECT_NAME/g" LICENSE
rm -f LICENSE.bak

# Create .env file for easy configuration
echo -e "${YELLOW}🔧 Creating .env file...${NC}"
cat > .env << EOF
# Project Configuration
PROJECT_NAME=$PROJECT_NAME
GITHUB_USERNAME=$GITHUB_USERNAME
PROJECT_DESCRIPTION=$PROJECT_DESCRIPTION
PROJECT_URL=$PROJECT_URL
EOF

# Create setup instructions
echo -e "${YELLOW}📝 Creating setup instructions...${NC}"
cat > SETUP-COMPLETE.md << EOF
# 🚀 Project Setup Complete!

## What was updated:
✅ Project name: $PROJECT_NAME
✅ GitHub username: $GITHUB_USERNAME
✅ Project description: $PROJECT_DESCRIPTION
✅ Project URL: $PROJECT_URL
✅ All configuration files
✅ README.md
✅ LICENSE
✅ GitHub Actions workflow

## Next steps:
1. Review the changes in all files
2. Update any remaining references if needed
3. Commit and push to GitHub
4. Enable GitHub Pages in repository settings
5. Your documentation will be available at: $PROJECT_URL/$PROJECT_NAME_LOWER/

## Files modified:
- package.json
- docusaurus.config.ts
- README.md
- LICENSE
- .github/workflows/deploy.yml
- .env (created)

Happy documenting! 📖✨
EOF

echo ""
echo -e "${GREEN}🎉 Project setup completed successfully!${NC}"
echo ""
echo -e "${CYAN}📋 Summary of changes:${NC}"
echo -e "   • Project name: ${WHITE}$PROJECT_NAME${NC}"
echo -e "   • GitHub username: ${WHITE}$GITHUB_USERNAME${NC}"
echo -e "   • Project URL: ${WHITE}$PROJECT_URL${NC}"
echo -e "   • Documentation URL: ${WHITE}$PROJECT_URL/$PROJECT_NAME_LOWER/${NC}"
echo ""
echo -e "${YELLOW}📁 Check SETUP-COMPLETE.md for detailed instructions${NC}"
echo -e "${YELLOW}🔧 Review .env file for configuration details${NC}"
echo ""
echo -e "${GREEN}Next: npm start (to test locally) or npm run build (to build for production)${NC}"
