
//  Get / Post operations [CRUD] 


// app/api/services/route.js

import { NextResponse } from "next/server"

const services = [
  { id: 1, title: "Oil Change", price: 50 },
  { id: 2, title: "Brake Repair", price: 120 },
]

// GET all services
export async function GET() {
 
    return NextResponse.json(services)

}

// POST a new service
export async function POST(request) {
  
    const body = await request.json()

  services.push({ id: Date.now(), ...body })


  return new NextResponse.json({ message: 'Service added successfully' }, { status: 201 })
}
