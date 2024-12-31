import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-.485zM3.715 0L0 3.715l1.414 1.414L8.485 0H3.715zm10.285 0L6.485 7.515l1.414 1.414L15.485 0H14zM38.657 0L29.8 8.858 31.214 10.272 40.07 1.414 38.657 0z' fill='%2310b981' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
    </div>
  );
}