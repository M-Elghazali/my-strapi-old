module.exports = ({ env }) => ({
    // Other plugin configurations...

    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },

    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: env('SMTP_USER'),
                    pass: env('SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: 'no-reply@example.com',
                defaultReplyTo: 'no-reply@example.com',
            },
        },
    },

    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },

    // Other plugin configurations...
});
