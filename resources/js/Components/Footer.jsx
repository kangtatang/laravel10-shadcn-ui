export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-300 p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>
                    Hak Cipta © {year}{" "}
                    <a
                        href="https://digital-karawang.com"
                        target="_blank"
                        className="font-bold"
                    >
                        digital-karawang.com
                    </a>{" "}
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

