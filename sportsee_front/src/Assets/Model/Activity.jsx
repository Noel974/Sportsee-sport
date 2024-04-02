class UserActivity {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }

    getTotalCaloriesBurned() {
        return this.sessions.reduce((total, session) => total + session.calories, 0);
    }

    getAverageWeight() {
        const totalWeight = this.sessions.reduce((total, session) => total + session.kilogram, 0);
        return totalWeight / this.sessions.length;
    }
}
export default UserActivity ;