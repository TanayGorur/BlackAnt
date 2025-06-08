
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  FileText, 
  Download, 
  BarChart3, 
  Table, 
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Folder,
  Activity,
  Zap,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (files?: FileList) => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          toast({
            title: "Files processed successfully!",
            description: `${files?.length || 1} DXF file(s) have been converted to Excel data.`,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const recentFiles = [
    {
      name: 'HVAC_System_Layout.dxf',
      status: 'completed',
      processed: '15 minutes ago',
      entities: 2847,
      size: '4.2 MB',
      type: 'HVAC'
    },
    {
      name: 'Electrical_Distribution.dxf',
      status: 'processing',
      processed: 'In progress (78%)',
      entities: 1653,
      size: '2.8 MB',
      type: 'Electrical'
    },
    {
      name: 'Plumbing_Risers.dxf',
      status: 'completed',
      processed: '1 hour ago',
      entities: 934,
      size: '1.9 MB',
      type: 'Plumbing'
    },
    {
      name: 'Fire_Protection_Plan.dxf',
      status: 'completed',
      processed: '2 hours ago',
      entities: 1247,
      size: '3.1 MB',
      type: 'Fire Safety'
    }
  ];

  const stats = [
    {
      title: 'Files Processed Today',
      value: '23',
      change: '+18%',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'MEP Elements Extracted',
      value: '47.2K',
      change: '+12%',
      icon: BarChart3,
      color: 'text-green-600'
    },
    {
      title: 'Excel Reports Generated',
      value: '189',
      change: '+24%',
      icon: Table,
      color: 'text-purple-600'
    },
    {
      title: 'Processing Time Saved',
      value: '156h',
      change: '+31%',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const recentActivity = [
    {
      action: 'File processed',
      file: 'HVAC_System_Layout.dxf',
      time: '15 min ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      action: 'Excel exported',
      file: 'Electrical_Distribution.xlsx',
      time: '32 min ago',
      icon: Download,
      color: 'text-blue-500'
    },
    {
      action: 'Batch upload started',
      file: '8 DXF files',
      time: '1 hour ago',
      icon: Upload,
      color: 'text-purple-500'
    },
    {
      action: 'Processing completed',
      file: 'Plumbing_Risers.dxf',
      time: '1 hour ago',
      icon: Zap,
      color: 'text-yellow-500'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'HVAC': 'bg-blue-100 text-blue-800',
      'Electrical': 'bg-yellow-100 text-yellow-800',
      'Plumbing': 'bg-green-100 text-green-800',
      'Fire Safety': 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MEP Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor your DXF file processing and MEP data analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upload" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload Files</TabsTrigger>
                <TabsTrigger value="recent">Recent Files</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="h-5 w-5 mr-2" />
                      Upload DXF Files
                    </CardTitle>
                    <CardDescription>
                      Upload your MEP drawings to extract quantities and generate detailed reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                        dragOver 
                          ? 'border-blue-400 bg-blue-50' 
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <Upload className={`mx-auto h-12 w-12 mb-4 transition-colors ${dragOver ? 'text-blue-500' : 'text-gray-400'}`} />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {dragOver ? 'Drop your files here' : 'Drop your DXF files here'}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        or click to browse your computer
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".dxf"
                        className="hidden"
                        id="file-upload"
                        onChange={(e) => handleFileUpload(e.target.files || undefined)}
                      />
                      <label htmlFor="file-upload">
                        <Button onClick={() => {}} disabled={isProcessing} className="hover-scale">
                          {isProcessing ? 'Processing...' : 'Select DXF Files'}
                        </Button>
                      </label>
                      
                      {isProcessing && (
                        <div className="mt-6 animate-fade-in">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Processing MEP data...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} className="w-full" />
                          <p className="text-xs text-gray-500 mt-2">
                            Extracting HVAC ducts, electrical conduits, and plumbing fixtures...
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500 space-y-1">
                      <p>• Supported formats: .dxf files up to 100MB each</p>
                      <p>• Batch processing: Upload up to 20 files at once</p>
                      <p>• Optimized for MEP (Mechanical, Electrical, Plumbing) drawings</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Folder className="h-5 w-5 mr-2" />
                      Recent Files
                    </CardTitle>
                    <CardDescription>
                      View and manage your recently processed MEP drawings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                          <div className="flex items-center space-x-4">
                            {getStatusIcon(file.status)}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <p className="font-medium text-gray-900">{file.name}</p>
                                <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(file.type)}`}>
                                  {file.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {file.entities} entities • {file.size} • {file.processed}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {file.status === 'completed' && (
                              <Button size="sm" variant="outline" className="hover-scale">
                                <Download className="h-4 w-4 mr-1" />
                                Excel
                              </Button>
                            )}
                            <Button size="sm" variant="ghost" className="hover-scale">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      MEP Processing Analytics
                    </CardTitle>
                    <CardDescription>
                      Insights into your MEP data extraction and processing patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Analytics Dashboard</p>
                        <p className="text-sm text-gray-500 mt-2 max-w-md">
                          Interactive charts showing MEP system distributions, 
                          processing trends, and quantity extraction metrics
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start hover-scale">
                  <Upload className="h-4 w-4 mr-2" />
                  Batch Upload
                </Button>
                <Button variant="outline" className="w-full justify-start hover-scale">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Data
                </Button>
                <Button variant="outline" className="w-full justify-start hover-scale">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start hover-scale">
                  <Settings className="h-4 w-4 mr-2" />
                  Processing Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle>Processing Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Queue Status</span>
                    <span className="text-sm font-medium text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Files in Queue</span>
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg. Processing Time</span>
                    <span className="text-sm font-medium">3.2 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-sm font-medium text-green-600">98.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <activity.icon className={`h-4 w-4 mt-1 ${activity.color}`} />
                      <div className="text-sm flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-gray-600">{activity.file}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
