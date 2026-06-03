import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    // 1. Configuramos tu servidor de correo (Google)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // true usa el puerto seguro 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Diseñamos el correo que te llegará a ti
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CORREO_DESTINO, 
      replyTo: data.email, // Esto permite responder directo al cliente
      subject: `🔥 Nueva Solicitud de Demo: ${data.software}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316;">Nueva Solicitud de Demostración</h2>
          <p>Un cliente potencial ha solicitado información desde la página web de EducaInnova:</p>
          <ul style="font-size: 16px; line-height: 1.8;">
            <li><strong>Plataforma de Interés:</strong> ${data.software}</li>
            <li><strong>Nombre del Contacto:</strong> ${data.nombre}</li>
            <li><strong>Correo Institucional:</strong> ${data.email}</li>
            <li><strong>Institución Educativa:</strong> ${data.colegio}</li>
          </ul>
        </div>
      `,
    };

    // 3. Enviamos el correo
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Correo enviado con éxito" }, { status: 200 });

  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "Hubo un error al enviar el correo" }, { status: 500 });
  }
}