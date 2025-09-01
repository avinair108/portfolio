import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Code, Heart, PenTool, Play, ExternalLink } from 'lucide-react';


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
      videoId?: string; // Added for YouTube video
      videoUrl?: string; // Added for YouTube video
      articleUrl?: string; // Added for Substack article
      companyUrl?: string; // Added for company website
      projectUrl?: string; // Added for GitHub project link
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
          description: 'CTO, Co-Founder - Led end-to-end development of MagNet Agents, a legal tech platform that helps lawyers automate and optimize client acquisition using intelligent web scraping, LLMs, and vector search. Developed and deployed a full-stack web application with a React (Vite) frontend hosted on Netlify and a Flask backend API hosted on Render. Integrated Supabase for user authentication and database management, with RAG-based retrieval using LangChain and a custom vector store pipeline. Partnered with 60+ lawyers during product discovery and worked directly with early law firm customers to refine features; doubled weekly active usage and drove adoption across dozens of paying customers by delivering measurable improvements in lead discovery, tracking, and outreach efficiency.',
          period: 'February 2025 - Present',
          technologies: ['React (Vite)', 'Flask', 'Supabase', 'LangChain', 'LLMs', 'Vector Search', 'Netlify', 'Render'],
          companyUrl: 'https://magnetlegal.co'
        },
        {
          name: 'Smart Data Solutions',
          description: 'Machine Learning Engineer Intern - Extracted and organized a large dataset of image and corresponding OCR data to identify file locations and class labels from a MySQL database. Automated data file transfers using retrieved file locations via SFTP and organized transferred files into a repository to be processed for data analysis. Built a multi-modal model combining extracted features from a modified version of VGG16 for image features along with LSTM and feature flags on keywords for text features. Achieved an accuracy of over 88% in document classification, greatly reducing dependence on manual identification.',
          period: 'February 2024 – May 2024',
          technologies: ['PyTorch', 'VGG16', 'LSTM', 'MySQL', 'SFTP', 'Multi-modal AI', 'Document Classification']
        },
        {
          name: 'Paycom',
          description: 'Software Engineer Intern - Developed a job performance metrics application enabling seamless integration of assorted job data from external sources via a flexible and generalized schema, allowing for enhanced data visualization and analysis. Built a long running job to autonomously fetch and deposit external job data into the application\'s database. Researched ways to save user queries to generate reports containing requested visualizations.',
          period: 'May 2023 – August 2023',
          technologies: ['Python', 'React', 'Database Design', 'Data Visualization', 'API Integration', 'Report Generation']
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
      title: 'Featured Projects - Github(avinair108)',
      items: [
        {
          name: 'Optimizing RAG in Multi-Hop Tasks',
          description: 'Developed a Multi-Hop RAG system based off the BM-25 pipeline introduced in a paper by Krishna et al. that utilizes the Gemini API to measure LLM performance on multi-document question answering across several reasoning types. Built a model to predict hop counts to dynamically alter retrieval iterations, resulting in improved efficiency in key RAG tasks. Introduced a novel metric (AEI score) to measure and optimize the trade-off between accuracy and efficiency in multi-hop RAG tasks.',
          period: 'November 2024 - December 2024',
          technologies: ['PyTorch', 'Hugging Face', 'Gemini API', 'RAG', 'LLMs', 'Multi-Hop Reasoning'],
          projectUrl: 'https://github.com/Theod0reWu/Deep-Learning-Multi-Hop-QA'
        },
        {
          name: 'Semi-Supervised Learning Re-implementation',
          description: 'Reimplemented the M1 model as described in "Semi-supervised Learning with Deep Generative Models" (Kingsma et al, 2014) for use on the FashionMNIST dataset. Modified the Variational Auto Encoder architecture to include convolutional layers. Achieved an accuracy of 86% on test set using an SVM classifier with 3000 labeled samples.',
          period: 'October 2024',
          technologies: ['PyTorch', 'Variational Auto Encoder', 'FashionMNIST', 'SVM', 'Deep Learning'],
          projectUrl: 'https://github.com/avinair108/Deep-Learning-Projects'
        },
        {
          name: 'Pothole Detector Application',
          description: 'Trained YOLO v8 model for pothole detection with 87% accuracy and React frontend with map visualization',
          period: 'November 2023',
          technologies: ['PyTorch', 'React', 'Leaflet.js', 'YOLO v8', 'Computer Vision'],
          projectUrl: 'https://github.com/avinair108/PotholeDetector'
        },
        {
          name: 'Mission Match',
          description: 'Led a team on a senior design project website that connects Non-Profit Organizations with donors based on similar goals and needs. Built out a real time messaging system for matches powered by Firestore, and used the Stripe API to enable payments to desired NPOs',
          period: 'April 2024',
          technologies: ['React', 'Firebase', 'Firestore', 'Stripe', 'Team Development'],
          projectUrl: 'https://github.com/XxDineshAxX/MissionMatch'
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
          name: 'AYUDH - Member and Regional Coordinator',
          description: 'Coordinated projects and volunteered over 100 hours toward AYUDH initiatives, including tree planting, feeding the homeless, and other activities to assist the community.Helped organize and facilitate numerous fundraisers for charitable causes',
          period: '2014-Present',
          technologies: ['Communication', 'Charity', 'Leadership']
        },
        
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
      title: 'Substack Newsletter - avithecarry',
      items: [
        {
          name: 'How Gardening Inspired Me To Be Great',
          description: 'A reflection on how tending to mystery plants in the brutal Texas summer taught me about perseverance, adaptation, and finding purpose in helping living things thrive despite harsh environments.',
          period: 'July 25, 2025',
          technologies: ['Personal Growth', 'Gardening', 'Philosophy', 'Writing'],
          articleUrl: 'https://avithecarry.substack.com/p/how-gardening-inspired-me-to-be-great?r=62kjgb'
        },
        {
          name: 'Vibe Coding (and Debugging) a Legal Tech Startup',
          description: 'My experience building an AI-powered business development tool for lawyers, including the highs and lows of using AI coding tools like Bolt, Cursor, and Gemini for MVP development.',
          period: 'July 22, 2025',
          technologies: ['AI Development', 'Legal Tech', 'Startup', 'Flask', 'Supabase'],
          articleUrl: 'https://avithecarry.substack.com/p/vibe-coding-and-debugging-a-legal?r=62kjgb'
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
      title: 'YouTube Channel - avithecarry',
      items: [
        {
          name: 'Surviving Bears and Snakes in Pagosa Springs',
          description: 'Vlog of my roadtrip to Pagosa Springs',
          period: '2025',
          technologies: ['Vlog', 'Nature', 'Wildlife', 'Hiking'],
          videoId: 'tFA6ihoAGEE',
          videoUrl: 'https://youtu.be/tFA6ihoAGEE?si=CFPVj_jnC4aaCw2_'
        },
        {
          name: 'Trying to Learn How to Garden',
          description: 'Doing yard work, trying to learn how to garden',
          period: '2025',
          technologies: ['Planting', 'Gardening', 'Box Garden'],
          videoId: 'jTwv777-X0U',
          videoUrl: 'https://youtu.be/jTwv777-X0U?si=CVQfQ_k2j4hiMUSc'
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
            src="https://avinair108.github.io/portfolio/profile-sun.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Portfolio Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20 md:top-8 md:left-1/2 md:transform md:-translate-x-1/2">
          <h1 className="retro-title text-4xl md:text-6xl font-bold mb-2">
            Avinash Nair
          </h1>
          
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20 md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2">
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
                
                {/* YouTube Video Preview */}
                {item.videoId && (
                  <div className="px-6 pb-4">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                        title={item.name}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Watch on YouTube
                      </a>
                      <Badge variant="outline" className="text-xs">
                        {item.videoId}
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Substack Article Preview */}
                {item.articleUrl && (
                  <div className="px-6 pb-4">
                    <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20" />
                      <div className="relative p-6 flex flex-col justify-center items-center text-center h-full">
                        <PenTool className="w-12 h-12 text-orange-600 mb-3" />
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">{item.name}</h3>
                        <p className="text-sm text-orange-700 line-clamp-3">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <a
                        href={item.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <PenTool className="w-4 h-4" />
                        Read on Substack
                      </a>
                      <Badge variant="outline" className="text-xs">
                        Article
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Company Website Link */}
                {item.companyUrl && (
                  <div className="px-6 pb-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Company Website</span>
                      </div>
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

                {/* GitHub Project Link */}
                {item.projectUrl && (
                  <div className="px-6 pb-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Source Code</span>
                      </div>
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
                
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