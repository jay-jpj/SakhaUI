import React from 'react'




export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
        <h1 style={{color : '#5F259E',fontSize : '2.2vmax',textAlign : 'center'}}>U D Y O G A  &emsp; S A K H A</h1>
        <hr />
        {children}
        </body>
      </html>
    );
  }