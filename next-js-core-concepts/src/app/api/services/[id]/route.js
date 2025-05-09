// app/api/services/[id]/route.js

import { NextResponse } from "next/server"

const services = [
  { id: 1, title: "Oil Change", price: 50 },
  { id: 2, title: "Brake Repair", price: 120 },
]

export async function GET(_, { params }) {
  const service = services.find(s => s.id === parseInt(params.id))


  if (!service) return new Response("Service not found", { status: 404 })


  return NextResponse.json(service)
}

export async function PUT(request, { params }) {
  
  
    const updatedData = await request.json()
 
  const index = services.findIndex(s => s.id === parseInt(params.id))
  
  if (index === -1) return new Response("Not found", { status: 404 })

  services[index] = { ...services[index], ...updatedData }
  return NextResponse.json({ message: "Service updated" })
}



export async function DELETE(_, { params }) {
  
  
    const index = services.findIndex(s => s.id === parseInt(params.id))
  if (index === -1) return new Response("Not found", { status: 404 })

  
  
    services.splice(index, 1)
  return Response.json({ message: "Service deleted" })
}
