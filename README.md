# PickyEatersApp

A React Native mobile application designed to help picky eaters discover new foods through gamification and social features.

## 🎯 Overview

PickyEatersApp transforms the challenge of trying new foods into an engaging experience. Through daily challenges, food trivia games, and social features, users can expand their palate while earning points and connecting with friends.

## 🚀 Features

### Current Features
- **🎮 Game Center**
  - Daily food challenges
  - Food trivia games
  - Restaurant roulette
  - Points-based reward system

- **👤 User Profile**
  - Track foods tried and points earned
  - View friend connections
  - Manage dietary preferences
  - Account settings

- **🎨 Dark Theme UI**
  - Modern, accessible dark theme design
  - Consistent color palette across the app

### Upcoming Features
- **📱 Social Feed** - Share food experiences with friends
- **🧭 Discover** - Get personalized food recommendations
- **🏆 Achievements** - Unlock badges for trying new foods
- **👥 Friend Challenges** - Compete with friends

## 🛠️ Tech Stack

- **Framework**: React Native 0.79.5
- **Platform**: Expo 53.0.0
- **Navigation**: React Navigation v6
- **UI**: Custom StyleSheet with @expo/vector-icons
- **Language**: JavaScript

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Emulator

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PickyEatersApp.git
cd PickyEatersApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Project Structure

```
PickyEatersApp/
├── App.js                  # Main app entry point
├── app.json               # Expo configuration
├── src/
│   ├── components/        # Reusable components
│   ├── constants/         # App constants and colors
│   ├── navigation/        # Navigation configuration
│   ├── screens/           # App screens
│   └── styles/            # Global styles
```

## 🎨 Design System

The app uses a cohesive dark theme with:
- **Primary**: Dark Red (#8B0000)
- **Background**: Dark Gray (#121212)
- **Surface**: Lighter Gray (#1E1E1E)
- **Cards**: (#252525)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- The app is currently in early development
- Authentication system needs to be implemented
- API integration for food data is pending
- Testing framework needs to be set up

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Built with React Native and Expo
- Icons from @expo/vector-icons
- Inspired by the need to make trying new foods fun and social