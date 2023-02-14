import mongoose from "mongosse";

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true            
        },
        url: {
            type: String,
            required: true,
            unique: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Repository', repositorySchema);