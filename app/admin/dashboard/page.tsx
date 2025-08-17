export const dynamic = "force-dynamic";
import { getCardData, getUsers } from "@/lib/actions/general.action";
import Link from "next/link";

export default async function Dashboard() {
  const user = await getUsers();
  const totalUsers = user?.length;
  const data = await getCardData();
  const totalcard = data?.length;   
  
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-gray-300">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      
        <div className="rounded-lg  backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-200 p-3">
              <svg className="h-6 w-6 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-medium text-gray-600">Total Users</h2>
              <p className="text-2xl font-semibold text-gray-800">{totalUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-medium text-gray-600">Active Users</h2>
              <p className="text-2xl font-semibold text-gray-800">85</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-medium text-gray-600">Content Items</h2>
              <p className="text-2xl font-semibold text-gray-800">{totalcard}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <svg className="h-6 w-6 text-yellow-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-medium text-gray-600">Reports</h2>
              <p className="text-2xl font-semibold text-gray-800">12</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity Section */}
        <div className="rounded-lg backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-700">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-blue-100 p-2">
                <svg className="h-4 w-4 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">New user registered</p>
                <p className="text-sm text-gray-500">Jane Smith - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-green-100 p-2">
                <svg className="h-4 w-4 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">Content updated</p>
                <p className="text-sm text-gray-500">About Page - 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-red-100 p-2">
                <svg className="h-4 w-4 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">Item deleted</p>
                <p className="text-sm text-gray-500">Product #12345 - 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions Section */}
        <div className="rounded-lg backdrop-blur-2xl bg-gray-400 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-700">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex cursor-pointer items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              <svg className="mr-2 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add New User
            </button>
            <button
            
            className="flex cursor-pointer items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
              <svg className="mr-2 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 4v16m8-8H4"></path>
              </svg>
              <Link href="/admin/upload">Create Content</Link>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600">
              <svg className="mr-2 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Generate Report
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
              <svg className="mr-2 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}