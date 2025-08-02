import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const Properties = () => {
  const [properties] = useState([
    {
      id: 1,
      name: "Luxury Suite",
      description: "Premium suite with ocean view",
      rooms: 5,
      price: 299,
      status: "active"
    },
    {
      id: 2,
      name: "Business Hotel",
      description: "Modern hotel for business travelers",
      rooms: 12,
      price: 199,
      status: "active"
    },
    {
      id: 3,
      name: "Budget Inn",
      description: "Affordable accommodation",
      rooms: 8,
      price: 99,
      status: "inactive"
    }
  ]);

  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Property Listing</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your properties and rooms</p>
          </div>
          <Button className="flex items-center gap-2">
            <IconPlus className="h-4 w-4" />
            Add Property
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{property.name}</CardTitle>
                    <CardDescription>{property.description}</CardDescription>
                  </div>
                  <Badge variant={property.status === 'active' ? 'default' : 'secondary'}>
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rooms:</span>
                    <span className="font-medium">{property.rooms}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Starting Price:</span>
                    <span className="font-medium">${property.price}/night</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <IconEdit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <IconTrash className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Property Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Property</CardTitle>
            <CardDescription>Create a new property listing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Property Name</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter property name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Number of Rooms</label>
                <input 
                  type="number" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter number of rooms"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter property description"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Base Price</label>
                <input 
                  type="number" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter base price per night"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full">Create Property</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardSidebar>
  );
};

export default Properties;