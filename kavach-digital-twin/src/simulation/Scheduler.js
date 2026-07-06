class Scheduler {

    constructor() {

        this.tasks = [];

    }

    add(task) {

        this.tasks.push(task);

    }

    run(state, dt) {

        this.tasks.forEach(task => {

            if (task.update) {

                task.update(state, dt);

            }

        });

    }

}

export default Scheduler;