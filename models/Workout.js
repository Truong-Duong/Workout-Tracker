const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},

	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: 'Type of exercise is required.',
			},
			name: {
				type: String,
				trim: true,
				required: 'Name of exercise is required.',
			},
			duration: {
				type: Number,
				required: 'Exercise duration is required.',
			},
			weight: {
				type: Number,
                required: 'Exercise weight is required.',
			},
			reps: {
				type: Number,
                required: 'Exercise reps is required.',
			},
			sets: {
				type: Number,
                required: 'Exercise sets is required.',
			},
			distance: {
				type: Number,
                required: 'Exercise distance is required.',
			},
		},
	],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;