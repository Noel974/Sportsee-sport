class User {
    constructor(id, userInfos, todayScore, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }

    getUserFullName() {
        return `${this.userInfos.firstName} ${this.userInfos.lastName}`;
    }
}
export default User