import { testBackend } from '../actions/test';
import { Button } from '@pa/ui/components/shadcn/button';

export default async function Index() {
  const backendData = await testBackend();

  return (
    <div className="h-full flex w-full items-center justify-center">
      <div className="bg-green w-[500px] h-[500px]">
        <h1>
          <span> Hello there, </span>
          Welcome web 👋
        </h1>
        {backendData && (
          <div className="flex gap-4">
            <p className="bg-slate-600 text-white">
              Message from backend: {backendData}
            </p>
            <Button>Click Me</Button>
          </div>
        )}
      </div>
    </div>
  );
}
