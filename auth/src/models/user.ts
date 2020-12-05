import { Schema, model, Model, Document } from 'mongoose';

import { Password } from '../utils/password';
// An interface that describes the properties that are required to create a new user
interface UserAttributes {
	email: string;
	password: string;
}

interface UserDoc extends Document {
	email: string;
	password: string;
}

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		// Not common to define this in the model file - should be the responsibility of the view
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
			},
		},
	}
);

// Only hash the password if it has been modified
userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'));
		this.set('password', hashed);
	}
	done();
});

const UserModel = model<UserDoc>('User', userSchema);

class User extends UserModel {
	constructor(private attributes: UserAttributes) {
		super(attributes);
	}
}

export { User };
