import SecondaryHeaderMenu from "@/components/secondary-header-menu";

export default function Profile() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <div>Profile</div>
    </div>
  );
}
