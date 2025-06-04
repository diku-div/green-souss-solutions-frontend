'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  try {
 

    // 2. Login (use /login — not /api/login)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      const contentType = res.headers.get('Content-Type') || '';
      const errorText = contentType.includes('application/json')
        ? (await res.json()).message
        : await res.text();
      setError(errorText || 'Login failed');
      return;
    }

    const data = await res.json();
    console.log('Login successful:', data)
    router.push('/admin');
  } catch (err) {
    setError('Something went wrong:'+err);
  }
};


  return (
    <div className="flex w-full h-full rounded-4xl mx-auto ">
      <div className="w-full p-10 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>

          <form onSubmit={handleLogin} className="space-y-5 ">
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border px-4 py-2 rounded-4xl mt-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                className="w-full border px-4 py-2 rounded-4xl mt-1"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            {/* <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="form-checkbox"
                />
                Remember me
              </label>
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div> */}
            <div className='pt-5'>
            <Button variante='primary'  isfullwidth>Log In</Button>
            </div>
          </form>
        </div>

        <footer className="text-xs text-gray-400 text-center mt-10">
          {/* Optional Footer Content */}
        </footer>
      </div>
    </div>
  );
}
