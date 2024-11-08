const modes = {
    easy: {
        SHOOT_COST: 10,
        COINS_PER_KILL: 20,
        AIM_SIZE: 400,
        START_DIFFICULTY: 0,
        DELTA_DIFFICULTY: 130,
        MAX_DIFFICULTY: 80,
        MAX_ZOMBIE_SPEED: 6,
        MIN_ZOMBIE_SIZE: 0.8,
    },
    medium: {
        SHOOT_COST: 30,
        COINS_PER_KILL: 30,
        AIM_SIZE: 400,
        START_DIFFICULTY: 0,
        DELTA_DIFFICULTY: 100,
        MAX_DIFFICULTY: 90,
        MAX_ZOMBIE_SPEED: 8,
        MIN_ZOMBIE_SIZE: 0.7,
    },
    hard: {
        SHOOT_COST: 100,
        COINS_PER_KILL: 100,
        AIM_SIZE: 300,
        START_DIFFICULTY: 0,
        DELTA_DIFFICULTY: 80,
        MAX_DIFFICULTY: 100,
        MAX_ZOMBIE_SPEED: 10,
        MIN_ZOMBIE_SIZE: 0.6,
    },
    hardcore: {
        SHOOT_COST: 1000,
        COINS_PER_KILL: 200,
        AIM_SIZE: 200,
        START_DIFFICULTY: 0,
        DELTA_DIFFICULTY: 60,
        MAX_DIFFICULTY: 100,
        MAX_ZOMBIE_SPEED: 12,
        MIN_ZOMBIE_SIZE: 0.5,
    }, buttons: undefined

}

export default modes