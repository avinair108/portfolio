import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Code, Heart, PenTool } from 'lucide-react';
import profileImage from '@/assets/profile-sun.jpg';

interface Planet {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  details: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      period?: string;
      technologies?: string[];
    }>;
  };
  size: number;
  orbitRadius: number;
  className: string;
}

const planets: Planet[] = [
  {
    id: 'education',
    name: 'Education',
    icon: <GraduationCap className="w-4 h-4" />,
    description: 'Academic Journey',
    details: {
      title: 'Educational Background',
      items: [
        {
          name: 'Computer Science Degree',
          description: 'Bachelor of Science in Computer Science',
          period: '2020-2024',
          technologies: ['Data Structures', 'Algorithms', 'Software Engineering']
        },
        {
          name: 'Web Development Bootcamp',
          description: 'Full-stack development intensive program',
          period: '2023',
          technologies: ['React', 'Node.js', 'Database Design']
        }
      ]
    },
    size: 60,
    orbitRadius: 200,
    className: 'planet-1'
  },
  {
    id: 'work',
    name: 'Work Experience',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Professional Career',
    details: {
      title: 'Work Experience',
      items: [
        {
          name: 'Senior Frontend Developer',
          description: 'Led development of responsive web applications',
          period: '2023-Present',
          technologies: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          name: 'Full Stack Developer',
          description: 'Built end-to-end web solutions for clients',
          period: '2022-2023',
          technologies: ['Next.js', 'PostgreSQL', 'AWS']
        }
      ]
    },
    size: 70,
    orbitRadius: 280,
    className: 'planet-2'
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <Code className="w-4 h-4" />,
    description: 'Creative Solutions',
    details: {
      title: 'Featured Projects',
      items: [
        {
          name: 'E-commerce Platform',
          description: 'Full-featured online store with payment integration',
          technologies: ['React', 'Stripe', 'Firebase']
        },
        {
          name: 'Task Management App',
          description: 'Collaborative project management tool',
          technologies: ['Vue.js', 'Express', 'MongoDB']
        },
        {
          name: 'Weather Dashboard',
          description: 'Real-time weather tracking with data visualization',
          technologies: ['React', 'D3.js', 'Weather API']
        }
      ]
    },
    size: 80,
    orbitRadius: 360,
    className: 'planet-3'
  },
  {
    id: 'volunteer',
    name: 'Volunteering',
    icon: <Heart className="w-4 h-4" />,
    description: 'Community Impact',
    details: {
      title: 'Volunteer Work',
      items: [
        {
          name: 'Code for Good',
          description: 'Teaching programming to underserved communities',
          period: '2022-Present',
          technologies: ['Python', 'Scratch', 'Web Development']
        },
        {
          name: 'Open Source Contributor',
          description: 'Contributing to various open source projects',
          period: '2021-Present',
          technologies: ['JavaScript', 'Documentation', 'Testing']
        }
      ]
    },
    size: 55,
    orbitRadius: 440,
    className: 'planet-4'
  },
  {
    id: 'content',
    name: 'Content Creation',
    icon: <PenTool className="w-4 h-4" />,
    description: 'Knowledge Sharing',
    details: {
      title: 'Content & Writing',
      items: [
        {
          name: 'Technical Blog',
          description: 'Weekly articles on web development and tech trends',
          period: '2022-Present',
          technologies: ['Technical Writing', 'SEO', 'Analytics']
        },
        {
          name: 'YouTube Channel',
          description: 'Tutorial videos on programming concepts',
          period: '2023-Present',
          technologies: ['Video Editing', 'JavaScript', 'Teaching']
        }
      ]
    },
    size: 65,
    orbitRadius: 520,
    className: 'planet-5'
  }
];

export default function SpacePortfolio() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: string; delay: string }>>([]);

  useEffect(() => {
    // Generate random stars
    const starArray = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 3}s`
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Starfield Background */}
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Solar System Container */}
      <div className="solar-system w-full h-screen">
        {/* Orbital Paths and Planets */}
        {planets.map((planet, index) => (
          <div key={`orbit-${planet.id}`} className={`orbit orbit-${index + 1}`}>
            <div
              className={`planet ${planet.className}`}
              onClick={() => setSelectedPlanet(planet)}
              title={planet.name}
            >
              {planet.icon}
            </div>
          </div>
        ))}

        {/* Central Sun (Profile Picture) */}
        <div 
          className="sun absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            width: '150px',
            height: '150px'
          }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Portfolio Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Space Portfolio
          </h1>
          <p className="text-muted-foreground text-lg">
            Navigate through my professional universe
          </p>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <p className="text-muted-foreground text-sm">
            Click on any planet to explore that area of my experience
          </p>
        </div>
      </div>

      {/* Planet Details Modal */}
      <Dialog open={!!selectedPlanet} onOpenChange={() => setSelectedPlanet(null)}>
        <DialogContent className="planet-modal max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              {selectedPlanet?.icon}
              {selectedPlanet?.details.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedPlanet?.details.items.map((item, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {item.description}
                      </CardDescription>
                    </div>
                    {item.period && (
                      <Badge variant="outline" className="ml-2">
                        {item.period}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                {item.technologies && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}