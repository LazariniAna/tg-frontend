// components/Form/ImageInputForm.tsx

import React, { useEffect, useState } from 'react';

interface ImageInputFormProps {
    name: string;
    title: string;
    onChange: (base64: string | null) => void;
    error?: string;
    className?: string;
    initialImage?: string;  // Optional initial base64 string for preview
}

const ImageInputForm: React.FC<ImageInputFormProps> = ({ name, title, onChange, error, className, initialImage }) => {
    const [preview, setPreview] = useState<string | null>(initialImage || null);

    useEffect(() => {
        // Update preview if initialImage changes
        if (initialImage) {
            setPreview(initialImage);
        }
    }, [initialImage]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setPreview(base64);
                onChange(base64);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
            onChange(null);
        }
    };

    return (
        <div className={`mb-4 flex items-center ${className}`}>
            <div className="flex flex-col w-full">
                <label htmlFor={name} className="mb-2 font-bold">{title}</label>
                <input
                    name={name}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={`border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
            </div>
            {preview && (
                <div className="ml-4">
                    <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded border" />
                </div>
            )}
        </div>
    );
};

export default ImageInputForm;
