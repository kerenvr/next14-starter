"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationTest = () => {
    const router = useRouter()

    const handleClick = () => {
        console.log("clicked")
        router.push("/")
}
    return (
        <div>
            <Link href="/">Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    );
};

export default NavigationTest;