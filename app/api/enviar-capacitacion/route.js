import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CORREO_DESTINO,
      replyTo: data.email,
      subject: `🔥 Nueva Solicitud de Capacitación: ${data.colegio}`,
      html: `
        <h2>Nueva Solicitud de Capacitación</h2>
        <p>Un líder educativo ha solicitado información sobre capacitaciones desde la web de EducaInnova:</p>
        <ul>
          <li><strong>Público Objetivo:</strong> ${data.publico}</li>
          <li><strong>Nombre del Contacto:</strong> ${data.nombre}</li>
          <li><strong>Correo Institucional:</strong> ${data.email}</li>
          <li><strong>Institución Educativa:</strong> ${data.colegio}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Correo enviado con éxito" }, { status: 200 });

  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "Hubo un error al enviar el correo" }, { status: 500 });
  }
}