import * as firebase from 'firebase';
import "firebase/firestore";


function insert(db, {...props}){
    firebase.firestore().collection(db).add({ 
        ...props
    });
}

function select(db, defaults, onSnapshot){
    return firebase.firestore()
        .collection(db)
        .onSnapshot(querySnapshot => {
            const objs = querySnapshot.docs.map(documentSnapshot => {
                return {
                    _id: documentSnapshot.id,
                    ...defaults,
                    ...documentSnapshot.data()
                };
            });
            onSnapshot(objs);
        });
}

// ==============================================
//  EXERCISES

const EXERCISES_DB = 'EXERCISES';

const EXERCISE_DEFAULTS = {
    name: '',
    description: '---',
    image: '',
    type: '',
};

export function addExercise(name, description, image, type){
    insert(EXERCISES_DB, { 
        name: name,
        description: description,
        image: image,
        type: type
    });
}

export function getExercises(onSnapshot){
    return select(EXERCISES_DB, EXERCISE_DEFAULTS, onSnapshot);
}

// ==============================================
//  WORKOUTS

const WORKOUTS_DB = 'WORKOUTS';

const WORKOUT_DEFAULTS = {
    name: '',
};

export function getWorkouts(onSnapshot){
    return select(WORKOUTS_DB, WORKOUT_DEFAULTS, onSnapshot);
}
