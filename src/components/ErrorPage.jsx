import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className=" flex flex-col justify-center items-center bg-primary gap-4">
      <p className="text-5xl">😕</p>
      <h1 className="text-3xl font-bold font-primary uppercase">Something went wrong</h1>
      <p className="text-secondary opacity-70 text-sm">
        {error?.message ?? "An unexpected error occurred"}
      </p>
    </div>
  );
};

export default ErrorPage;