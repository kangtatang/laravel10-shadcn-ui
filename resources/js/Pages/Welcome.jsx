import { Head } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Welcome({ auth }) {
    const { toast } = useToast();

    return (
        <>
            <Head title="Welcome" />
            <body className="bg-gray-100 font-sans">
                <Navbar auth={auth} />
                {/* <!-- Konten Utama --> */}
                <div className="container mx-auto mt-8">
                    {/* <!-- Hero Section --> */}
                    <section className="bg-gray-200 p-8 rounded-lg">
                        <h2 className="text-4xl font-semibold mb-4">Hallo</h2>
                        <p className="text-lg">
                            Ini adalah contoh aplikasi Laravel menggunakan
                            Shadcn UI (React JS + Inertia JS + Tailwind CSS).
                        </p>
                    </section>

                    {/* <!-- Fitur Section --> */}
                    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-amber-100 p-8 rounded-lg">
                        <h1 className="text-3xl font-bold text-red-500 mx-auto">
                            UI Alert Dialog dan Toaster
                        </h1>
                        <AlertDialog>
                            <AlertDialogTrigger className="w-32 mx-auto">
                                <Button
                                    variant="outline"
                                    className="mx-auto w-32"
                                >
                                    Open
                                </Button>
                                {/* Open */}
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <Button
                            className="w-32 mx-auto"
                            variant="outline"
                            onClick={() => {
                                toast({
                                    title: "Testing",
                                    description: "Your message has been sent.",
                                });
                            }}
                        >
                            Show Toast
                        </Button>
                    </section>

                    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Fitur 1 --> */}
                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Fitur 1
                            </h3>
                            <p>Deskripsi singkat mengenai fitur ini.</p>
                        </div>

                        {/* <!-- Fitur 2 --> */}
                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Fitur 2
                            </h3>
                            <p>Deskripsi singkat mengenai fitur ini.</p>
                        </div>

                        {/* <!-- Fitur 3 --> */}
                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Fitur 3
                            </h3>
                            <p>Deskripsi singkat mengenai fitur ini.</p>
                        </div>
                    </section>
                </div>

                <Footer />
            </body>
            <Toaster />
        </>
    );
}
