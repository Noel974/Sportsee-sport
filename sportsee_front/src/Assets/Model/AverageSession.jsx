class UserAverageSessions {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }

    getAverageSessionLength() {
        const totalSessionLength = this.sessions.reduce((total, session) => total + session.sessionLength, 0);
        return totalSessionLength / this.sessions.length;
    }
}
export default UserAverageSessions