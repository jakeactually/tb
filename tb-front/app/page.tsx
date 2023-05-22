import { Files } from '@/components/Files';

export default async function  Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{ padding: '20px', color: 'white', fontWeight: 'bold', textAlign: 'left', backgroundColor: 'red', width: '100%' }}>
        React test app
      </h1>
      <Files></Files>
    </main>
  );
}
