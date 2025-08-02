import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconPlus, IconCalendar, IconUser } from "@tabler/icons-react";
import { useState } from "react";

const Bookings = () => {
  const [bookings] = useState([
    {
      id: 1,
      customerName: "John Doe",
      roomNumber: "101",
      checkIn: "2024-01-15",
      checkOut: "2024-01-18",
      status: "confirmed",
      type: "online",
      total: 897
    },
    {
      id: 2,
      customerName: "Jane Smith",
      roomNumber: "205",
      checkIn: "2024-01-16",
      checkOut: "2024-01-19",
      status: "pending",
      type: "walkin",
      total: 597
    },
    {
      id: 3,
      customerName: "Mike Johnson",
      roomNumber: "302",
      checkIn: "2024-01-14",
      checkOut: "2024-01-16",
      status: "checked-out",
      type: "online",
      total: 398
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'checked-out': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bookings</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage room reservations and check-ins</p>
          </div>
          <Button className="flex items-center gap-2">
            <IconPlus className="h-4 w-4" />
            New Booking
          </Button>
        </div>

        {/* Calendar View */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconCalendar className="h-5 w-5" />
              Calendar View
            </CardTitle>
            <CardDescription>Visual overview of room availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {day}
                </div>
              ))}
              {Array.from({ length: 21 }, (_, i) => (
                <div key={i} className="p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                  {i + 1}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bookings List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>All room reservations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <IconUser className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{booking.customerName}</h3>
                      <p className="text-sm text-muted-foreground">Room {booking.roomNumber}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{booking.checkIn} - {booking.checkOut}</p>
                    <p className="text-xs text-muted-foreground">{booking.type}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">${booking.total}</p>
                    <Badge variant={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* New Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create New Booking</CardTitle>
            <CardDescription>Add a new room reservation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Customer Name</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Room Number</label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Room</option>
                  <option>101</option>
                  <option>102</option>
                  <option>201</option>
                  <option>202</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Check-in Date</label>
                <input 
                  type="date" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Check-out Date</label>
                <input 
                  type="date" 
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Booking Type</label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Walk-in</option>
                  <option>Online</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Create Booking</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardSidebar>
  );
};

export default Bookings;