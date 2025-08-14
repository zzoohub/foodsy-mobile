import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
// Removed gesture handlers to prevent conflicts with scrolling
import * as Haptics from 'expo-haptics';

// Import orbital sections
import CameraCenter from '@/domains/camera/components/OrbitalCamera';
import SocialFeed from '@/domains/social/components/SocialFeed';
import DiscoverSection from '@/domains/discover/components/DiscoverSection';
import ProgressDashboard from '@/domains/progress/components/ProgressDashboard';
import AICoach from '@/domains/ai-coach/components/AICoach';
import { FloatingNotifications } from '@/components/FloatingNotifications';

const { width, height } = Dimensions.get('window');

enum OrbitalSection {
  Camera = 'camera',
  Social = 'social',
  Discover = 'discover', 
  Progress = 'progress',
  AICoach = 'ai-coach',
}

export default function OrbitalNavigation() {
  const [activeSection, setActiveSection] = useState<OrbitalSection>(OrbitalSection.Camera);
  const [isOverview, setIsOverview] = useState(false);

  // Animation values
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  // Removed gesture handling to prevent conflicts with ScrollView components

  const navigateToSection = (section: OrbitalSection) => {
    if (section === activeSection || isOverview) return;
    
    // Validate section exists
    if (!Object.values(OrbitalSection).includes(section)) {
      console.warn('Invalid section navigation attempted:', section);
      return;
    }
    
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      console.warn('Haptics feedback failed:', error);
    }
    
    // Instant section change to prevent flickering
    setActiveSection(section);
  };

  const exitOverview = () => {
    setIsOverview(false);
  };

  const renderActiveSection = () => {
    const commonProps = {
      onNavigate: (section: string) => navigateToSection(section as OrbitalSection),
      isActive: !isOverview,
    };

    switch (activeSection) {
      case OrbitalSection.Camera:
        return <CameraCenter {...commonProps} />;
      case OrbitalSection.Social:
        return <SocialFeed {...commonProps} />;
      case OrbitalSection.Discover:
        return <DiscoverSection {...commonProps} />;
      case OrbitalSection.Progress:
        return <ProgressDashboard {...commonProps} />;
      case OrbitalSection.AICoach:
        return <AICoach {...commonProps} />;
      default:
        return <CameraCenter {...commonProps} />;
    }
  };

  const renderOverview = () => {
    if (!isOverview) return null;

    return (
      <View style={styles.overviewContainer}>
        <TouchableOpacity 
          style={styles.overviewCard}
          onPress={() => {
            navigateToSection(OrbitalSection.Discover);
            exitOverview();
          }}
        >
          <View style={[styles.overviewSection, styles.discoverSection]}>
            <Text style={styles.overviewTitle}>Discover</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.overviewCard}
          onPress={() => {
            navigateToSection(OrbitalSection.AICoach);
            exitOverview();
          }}
        >
          <View style={[styles.overviewSection, styles.aiSection]}>
            <Text style={styles.overviewTitle}>AI Coach</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.overviewCard}
          onPress={() => {
            navigateToSection(OrbitalSection.Camera);
            exitOverview();
          }}
        >
          <View style={[styles.overviewSection, styles.cameraSection]}>
            <Text style={styles.overviewTitle}>Camera</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.overviewCard}
          onPress={() => {
            navigateToSection(OrbitalSection.Social);
            exitOverview();
          }}
        >
          <View style={[styles.overviewSection, styles.socialSection]}>
            <Text style={styles.overviewTitle}>Social</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.overviewCard}
          onPress={() => {
            navigateToSection(OrbitalSection.Progress);
            exitOverview();
          }}
        >
          <View style={[styles.overviewSection, styles.progressSection]}>
            <Text style={styles.overviewTitle}>Progress</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <Animated.View 
          style={[
            styles.content,
            {
              transform: [
                { translateX },
                { translateY },
                { scale },
              ],
            },
          ]}
        >
          {renderActiveSection()}
          {renderOverview()}
        </Animated.View>

        {/* Floating Notifications */}
        <FloatingNotifications />

        {/* Section Indicator */}
        <View style={styles.sectionIndicator}>
          <TouchableOpacity onPress={() => setIsOverview(!isOverview)} style={styles.overviewToggle}>
            <Text style={styles.overviewToggleText}>{isOverview ? 'Close' : 'Overview'}</Text>
          </TouchableOpacity>
          <View style={styles.indicators}>
            <View style={[styles.indicator, activeSection === OrbitalSection.Discover && styles.indicatorActive]} />
            <View style={[styles.indicator, activeSection === OrbitalSection.AICoach && styles.indicatorActive]} />
            <View style={[styles.centerIndicator, activeSection === OrbitalSection.Camera && styles.indicatorActive]} />
            <View style={[styles.indicator, activeSection === OrbitalSection.Social && styles.indicatorActive]} />
            <View style={[styles.indicator, activeSection === OrbitalSection.Progress && styles.indicatorActive]} />
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
  },
  overviewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  overviewCard: {
    width: width * 0.4,
    height: height * 0.3,
    margin: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  overviewSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverSection: {
    backgroundColor: '#FF6B35',
  },
  aiSection: {
    backgroundColor: '#4ECDC4',
  },
  cameraSection: {
    backgroundColor: '#45B7D1',
  },
  socialSection: {
    backgroundColor: '#FFA07A',
  },
  progressSection: {
    backgroundColor: '#98D8C8',
  },
  overviewTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionIndicator: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  overviewToggle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 8,
  },
  overviewToggleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  centerIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 8,
  },
  indicatorActive: {
    backgroundColor: '#FF6B35',
  },
});