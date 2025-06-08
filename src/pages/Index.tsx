
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BarChart3, 
  Download, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Upload,
  TrendingUp,
  Users,
  Building,
  Wrench
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: 'DXF File Processing',
      description: 'Advanced parsing algorithms for accurate data extraction from CAD drawings'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Interactive charts and comprehensive analytics for your CAD data'
    },
    {
      icon: Download,
      title: 'Excel Export',
      description: 'Export processed data to Excel with customizable templates'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Lightning-fast conversion with real-time progress tracking'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with encrypted data processing'
    },
    {
      icon: Clock,
      title: 'Batch Processing',
      description: 'Process multiple DXF files simultaneously for maximum efficiency'
    }
  ];

  const targetConsumers = [
    {
      icon: Building,
      title: 'MEP Consultants',
      description: 'Streamline quantity takeoffs for mechanical, electrical, and plumbing systems',
      benefits: ['Automated pipe and duct measurements', 'Equipment scheduling', 'Cost estimation']
    },
    {
      icon: Wrench,
      title: 'Engineering Firms',
      description: 'Enhance project delivery with accurate data extraction and analysis',
      benefits: ['Design validation', 'Material optimization', 'Quality assurance']
    },
    {
      icon: Users,
      title: 'Construction Teams',
      description: 'Accelerate project planning with detailed quantity reports',
      benefits: ['Resource planning', 'Budget forecasting', 'Progress tracking']
    }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Upload Your DXF Files',
      description: 'Simply drag and drop your CAD drawings or select files from your computer',
      icon: Upload
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Our advanced algorithms analyze and extract quantitative data from your drawings',
      icon: Zap
    },
    {
      step: '03',
      title: 'Download Results',
      description: 'Receive detailed Excel reports with all measurements and quantities organized',
      icon: Download
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects',
      features: ['10 DXF files/month', 'Basic templates', 'Email support', 'Standard processing']
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for MEP consultants',
      features: ['100 DXF files/month', 'Custom templates', 'Priority support', 'Batch processing', 'Advanced analytics'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited files', 'Custom integrations', 'Dedicated support', 'API access', 'White-label options']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'MEP Consultant at BuildTech',
      content: 'DXF Analytics has reduced our quantity takeoff time by 80%. What used to take days now takes hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Project Manager at EngineerPro',
      content: 'The accuracy and speed of data extraction is incredible. Our team productivity has increased significantly.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Senior Engineer at MEP Solutions',
      content: 'Finally, a tool that understands the complexity of MEP drawings. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform <span className="text-blue-600 animate-pulse">DXF Files</span> into
              <br />
              Actionable <span className="text-blue-600">Data</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate quantity takeoffs for MEP consultants with AI-powered precision. 
              Convert your CAD drawings into detailed Excel reports in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-3 hover-scale animate-scale-in">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover-scale">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-24 bg-white" id="what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in converting complex CAD drawings into structured, quantitative data 
              that MEP consultants and engineering firms can use for accurate project planning and estimation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Target Consumers Section */}
      <div className="py-24 bg-gray-50" id="target-consumers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for MEP Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for the unique needs of MEP consultants and engineering professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {targetConsumers.map((consumer, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="text-center">
                  <consumer.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">{consumer.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {consumer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {consumer.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to transform your DXF files into actionable data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.3}s`}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your project needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in ${plan.popular ? 'border-blue-500 scale-105' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="py-24 bg-white" id="customers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by MEP consultants and engineering firms worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of MEP consultants who trust DXF Analytics for their data conversion needs.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 hover-scale">
              Start Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
