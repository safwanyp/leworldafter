import CrystalLoader from "@/components/ui/crystal-loader/crystal-loader";

export default function HomePage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-full w-full bg-homepage-gradient bg-cover z-[1000] flex justify-center items-center">
                <CrystalLoader />
            </div>
        </div>
    );
}
