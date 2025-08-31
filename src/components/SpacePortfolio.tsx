import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Code, Heart, PenTool, Play } from 'lucide-react';


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
          name: 'Cornell Tech (Cornell University)',
          description: 'Master of Engineering in Computer Science',
          period: 'Aug. 2024 - May 2025',
          technologies: ['Computer Science', 'Engineering', 'Advanced Studies']
        },
        {
          name: 'The University of Texas at Dallas',
          description: 'Bachelor of Science in Computer Science & Cognitive Science',
          period: 'Aug. 2020 - May 2024',
          technologies: ['Computer Science', 'Cognitive Science', 'GPA: 3.8/4.0']
        }
      ]
    },
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
          name: 'MagNet Agents',
          description: 'CTO, Co-Founder - Led end-to-end development of legal tech platform using LLMs and vector search',
          period: 'February 2025 - Present',
          technologies: ['React (Vite)', 'Flask', 'Supabase', 'LangChain', 'LLMs']
        },
        {
          name: 'Smart Data Solutions',
          description: 'Machine Learning Engineer Intern - Built multi-modal model achieving 88% accuracy in document classification',
          period: 'February 2024 – May 2024',
          technologies: ['PyTorch', 'VGG16', 'LSTM', 'MySQL', 'SFTP']
        },
        {
          name: 'Paycom',
          description: 'Software Engineer Intern - Developed job performance metrics application with data visualization',
          period: 'May 2023 – August 2023',
          technologies: ['Python', 'React', 'Database Design', 'Data Visualization']
        }
      ]
    },
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
          name: 'Optimizing RAG in Multi-Hop Tasks',
          description: 'Developed Multi-Hop RAG system using Gemini API with novel AEI score metric for efficiency optimization',
          period: 'November 2024 - December 2024',
          technologies: ['PyTorch', 'Hugging Face', 'Gemini API', 'RAG', 'LLMs']
        },
        {
          name: 'Semi-Supervised Learning Re-implementation',
          description: 'Reimplemented M1 model with modified VAE architecture including convolutional layers, achieving 86% accuracy',
          period: 'October 2024',
          technologies: ['PyTorch', 'Variational Auto Encoder', 'FashionMNIST', 'SVM']
        },
        {
          name: 'Pothole Detector Application',
          description: 'Trained YOLO v8 model for pothole detection with 87% accuracy and React frontend with map visualization',
          period: 'November 2023',
          technologies: ['PyTorch', 'React', 'Leaflet.js', 'YOLO v8', 'Computer Vision']
        }
      ]
    },
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
    className: 'planet-4'
  },
  {
    id: 'content',
    name: 'Substack',
    icon: <PenTool className="w-4 h-4" />,
    description: 'Newsletter & Articles',
    details: {
      title: 'Substack Newsletter',
      items: [
        {
          name: 'Weekly Tech Newsletter',
          description: 'In-depth analysis of web development trends and insights',
          period: '2022-Present',
          technologies: ['Technical Writing', 'Newsletter', 'Tech Analysis']
        },
        {
          name: 'Programming Tutorials',
          description: 'Step-by-step guides for developers of all levels',
          period: '2023-Present',
          technologies: ['Tutorial Writing', 'Code Examples', 'Best Practices']
        }
      ]
    },
    className: 'planet-5'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <Play className="w-4 h-4" />,
    description: 'Video Content',
    details: {
      title: 'YouTube Channel',
      items: [
        {
          name: 'Programming Tutorials',
          description: 'Video tutorials on web development and programming concepts',
          period: '2023-Present',
          technologies: ['Video Editing', 'JavaScript', 'Teaching', 'Screen Recording']
        },
        {
          name: 'Code Reviews',
          description: 'Live code reviews and debugging sessions',
          period: '2023-Present',
          technologies: ['Code Analysis', 'Debugging', 'Live Streaming']
        }
      ]
    },
    className: 'planet-6'
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
        {/* Single Orbit Circle */}
        <div className="orbit-circle">
          {planets.map((planet, index) => (
            <div
              key={planet.id}
              className={`planet planet-${index + 1}`}
              onClick={() => setSelectedPlanet(planet)}
            >
              {planet.icon}
              <div className="planet-title">
                {planet.name}
              </div>
            </div>
          ))}
        </div>

        {/* Central Sun (Profile Picture) */}
        <div 
          className="sun z-20"
          style={{
            width: '150px',
            height: '150px'
          }}
        >
          <img
            src="./profile-sun.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Portfolio Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Avinash Nair
          </h1>
          
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