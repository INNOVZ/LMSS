'use client';

const PaathPage = () => {
    return (
        <div className="container mx-auto p-4 h-screen">
            {/* Use grid-rows-[{size}] for custom sizes */}
            <div className="grid grid-rows-[30%_70%] gap-4 h-full">
                {/* Row 1 - 30% height */}
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Row 1</h2>
                    <p>Content for row 1</p>
                </div>

                {/* Row 2 - 70% height */}
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Row 2</h2>
                    <p>Content for row 2</p>
                </div>
            </div>
        </div>
    );
};

export default PaathPage;
