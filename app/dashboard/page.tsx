import DashboardContent from '@/components/DashboardContent';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <DashboardContent />
      </main>
    </div>
  );
}