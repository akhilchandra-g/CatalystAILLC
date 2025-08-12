import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import { 
  Zap, 
  BarChart3, 
  Brain, 
  Database, 
  TrendingUp, 
  Settings, 
  Target, 
  Layers,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };
  const services = [
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into intuitive dashboards and reports that reveal trends, opportunities, and risks in real time.",
      features: ["Interactive Dashboards", "Real-time Reports", "Trend Analysis", "Risk Assessment"]
    },
    {
      icon: Brain,
      title: "Predictive & Prescriptive Analytics",
      description: "Leverage advanced AI models to forecast outcomes and recommend optimal actions, helping businesses stay ahead of the curve.",
      features: ["AI Forecasting", "Outcome Prediction", "Optimal Recommendations", "Future Planning"]
    },
    {
      icon: Target,
      title: "Business Intelligence Consulting",
      description: "Partner with you to identify key metrics, develop data strategies, and implement scalable analytics solutions tailored to your unique needs.",
      features: ["Strategy Development", "KPI Identification", "Custom Solutions", "Implementation Support"]
    },
    {
      icon: Database,
      title: "Data Integration & Pipeline Development",
      description: "Seamlessly combine data from multiple sources to create a unified, accurate, and timely data environment.",
      features: ["Multi-source Integration", "Pipeline Automation", "Data Quality", "Real-time Sync"]
    },
    {
      icon: Settings,
      title: "Automation & Process Optimization",
      description: "Use AI and machine learning to automate repetitive tasks, improve efficiency, and reduce operational costs.",
      features: ["Task Automation", "Efficiency Improvement", "Cost Reduction", "Process Optimization"]
    },
    {
      icon: Layers,
      title: "Custom AI Solutions",
      description: "Develop bespoke AI models and algorithms that solve specific business challenges and unlock competitive advantages.",
      features: ["Custom Models", "Algorithm Development", "Competitive Edge", "Business Solutions"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Catalyst AI <span className="text-sm font-normal opacity-80">LLC</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors hover:text-cyan-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                } ${activeSection === 'home' ? 'text-cyan-500' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors hover:text-cyan-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                } ${activeSection === 'services' ? 'text-cyan-500' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-cyan-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                } ${activeSection === 'about' ? 'text-cyan-500' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors hover:text-cyan-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                } ${activeSection === 'contact' ? 'text-cyan-500' : ''}`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all ${
                  activeSection === 'home' ? 'text-cyan-500 bg-cyan-50' : ''
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all ${
                  activeSection === 'services' ? 'text-cyan-500 bg-cyan-50' : ''
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all ${
                  activeSection === 'about' ? 'text-cyan-500 bg-cyan-50' : ''
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all ${
                  activeSection === 'contact' ? 'text-cyan-500 bg-cyan-50' : ''
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-pulse">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Logo size="lg" className="shadow-2xl" />
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Catalyst AI
                </h1>
                <p className="text-xl text-cyan-300 font-light">LLC</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses to unlock the full potential of their data
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Through cutting-edge analytics and AI-driven insights, we turn complex data into clear, actionable strategies that drive measurable growth and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span onClick={() => scrollToSection('services')}>Explore Our Services</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              <span onClick={() => scrollToSection('contact')}>Get Started</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('services')}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Driven by Data. Defined by Results.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to help you harness intelligence that translates into lasting business impact. 
            We transform complex data challenges into strategic opportunities that drive your business forward.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:text-cyan-500 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive AI and data analytics solutions designed to transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors flex items-center group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Catalyst AI LLC</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2025, Catalyst AI is a dynamic business consulting and services company 
                specializing in advanced data analytics and artificial intelligence solutions. 
                With a team of 11-50 dedicated professionals, we're positioned to deliver 
                personalized service while maintaining the expertise and resources to tackle 
                complex enterprise challenges.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialties span the entire data lifecycle, from integration and visualization 
                to predictive modeling and custom AI development. We believe that every business 
                has untapped potential in their data, and we're here to unlock it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm md:text-base text-gray-700">Advanced Data Analytics & Visualization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm md:text-base text-gray-700">Predictive & Prescriptive AI Modeling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm md:text-base text-gray-700">Business Intelligence Strategy & Consulting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm md:text-base text-gray-700">Data Integration & Automation Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm md:text-base text-gray-700">Custom AI & Machine Learning Development</span>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900">Growth</div>
                    <div className="text-sm text-gray-600">Driven Results</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Brain className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900">AI</div>
                    <div className="text-sm text-gray-600">Innovation</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900">Data</div>
                    <div className="text-sm text-gray-600">Intelligence</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Target className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900">Results</div>
                    <div className="text-sm text-gray-600">Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed px-4">
            Let's unlock the hidden potential in your data and drive meaningful business impact together. 
            Our team is ready to help you harness the power of AI and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Ready to start your data transformation journey? We'd love to hear about your challenges and explore how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-sm md:text-base text-gray-600">contact@catalystai.us</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-sm md:text-base text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Website</h4>
                    <a href="https://catalystai.us/" className="text-blue-600 hover:text-cyan-500 transition-colors">
                      catalystai.us
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-sm md:text-base text-gray-600">Connect with us professionally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Logo size="md" />
              <span className="text-xl font-bold">
                Catalyst AI <span className="text-sm font-normal opacity-80">LLC</span>
              </span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Catalyst AI LLC. All rights reserved.</p>
              <p className="mt-1">Driven by Data. Defined by Results.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;