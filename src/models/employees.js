import { Schema , model} from "mongoose";

const employeesSchema = new Schema({
    name:{
        type: String
    },
    lastName:{
        type: String
    },
    DUI:{
        type: String
    },
    birthday:{
        type: Date
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    isVerified:{
        type: Boolean
    },
    status:{
        type: String
    },
    idBranches:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "branches"
    }},{
        timestamps: true,
        strict: false
    });

export default model("employees", employeesSchema);