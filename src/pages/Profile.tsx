
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  Download,
  FileText,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  Building
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mepfirm.com',
    phone: '+1 (555) 123-4567',
    company: 'MEP Engineering Solutions',
    role: 'Senior MEP Consultant',
    location: 'New York, NY'
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    processingAlerts: true,
    weeklyReports: false,
    exportFormat: 'xlsx'
  });

  const { toast } = useToast();

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handlePreferencesUpdate = () => {
    toast({
      title: "Preferences saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const usageStats = [
    {
      label: 'Files Processed This Month',
      value: '247',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      label: 'Total Data Points Extracted',
      value: '156.7K',
      icon: BarChart3,
      color: 'text-green-600'
    },
    {
      label: 'Account Active Since',
      value: 'Jan 2024',
      icon: Calendar,
      color: 'text-purple-600'
    }
  ];

  const recentDownloads = [
    {
      name: 'HVAC_Quantities_Report.xlsx',
      date: '2 hours ago',
      size: '2.4 MB'
    },
    {
      name: 'Electrical_Takeoff_Summary.xlsx',
      date: '1 day ago',
      size: '1.8 MB'
    },
    {
      name: 'Plumbing_Systems_Data.xlsx',
      date: '3 days ago',
      size: '3.2 MB'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Overview Card */}
          <div className="lg:col-span-1">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <CardTitle>{profileData.firstName} {profileData.lastName}</CardTitle>
                <CardDescription>{profileData.role}</CardDescription>
                <CardDescription className="flex items-center justify-center mt-2">
                  <Building className="h-4 w-4 mr-1" />
                  {profileData.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <stat.icon className={`h-4 w-4 mr-2 ${stat.color}`} />
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                      <span className="text-sm font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <div className="mt-1 relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="mt-1 relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company</Label>
                        <div className="mt-1 relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="company"
                            value={profileData.company}
                            onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="role">Role</Label>
                          <Input
                            id="role"
                            value={profileData.role}
                            onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <Button type="submit" className="hover-scale">
                        Update Profile
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Configure how you want to receive updates and notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.emailNotifications}
                          onChange={(e) => setPreferences({...preferences, emailNotifications: e.target.checked})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Processing Alerts</p>
                          <p className="text-sm text-gray-600">Get notified when files are processed</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.processingAlerts}
                          onChange={(e) => setPreferences({...preferences, processingAlerts: e.target.checked})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Weekly Reports</p>
                          <p className="text-sm text-gray-600">Receive weekly usage summaries</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.weeklyReports}
                          onChange={(e) => setPreferences({...preferences, weeklyReports: e.target.checked})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="exportFormat">Default Export Format</Label>
                      <select
                        id="exportFormat"
                        value={preferences.exportFormat}
                        onChange={(e) => setPreferences({...preferences, exportFormat: e.target.value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="xlsx">Excel (.xlsx)</option>
                        <option value="csv">CSV (.csv)</option>
                        <option value="pdf">PDF Report (.pdf)</option>
                      </select>
                    </div>

                    <Button onClick={handlePreferencesUpdate} className="hover-scale">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      Recent Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentDownloads.map((download, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium text-sm">{download.name}</p>
                              <p className="text-xs text-gray-600">{download.date} • {download.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="hover-scale">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Billing Information
                    </CardTitle>
                    <CardDescription>
                      Manage your subscription and payment methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-900">Professional Plan</p>
                            <p className="text-sm text-blue-700">$99/month • Next billing: March 15, 2024</p>
                          </div>
                          <Button variant="outline" size="sm" className="hover-scale">
                            Manage Plan
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label>Payment Method</Label>
                          <div className="mt-2 p-3 border rounded-lg flex items-center justify-between">
                            <div className="flex items-center">
                              <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="text-sm">•••• •••• •••• 4242</span>
                            </div>
                            <Button variant="ghost" size="sm" className="hover-scale">
                              Edit
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label>Billing Address</Label>
                          <div className="mt-2 p-3 border rounded-lg">
                            <p className="text-sm text-gray-700">
                              123 Business St<br />
                              New York, NY 10001<br />
                              United States
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button className="hover-scale">
                        Download Invoice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>
                      Manage your password and security preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            placeholder="Enter current password"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            placeholder="Enter new password"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            className="mt-1"
                          />
                        </div>
                        <Button className="hover-scale">
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Authenticator App</p>
                          <p className="text-sm text-gray-600">Use an authenticator app to generate verification codes</p>
                        </div>
                        <Button variant="outline" className="hover-scale">
                          Setup
                        </Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-medium mb-4 text-red-600">Danger Zone</h3>
                      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                        <p className="text-sm text-red-800 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="destructive" className="hover-scale">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
