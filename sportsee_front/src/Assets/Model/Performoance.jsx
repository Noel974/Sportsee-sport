class UserPerformance {
    constructor(userId, performanceData) {
        this.userId = userId;
        this.performanceData = performanceData;
    }

    getPerformanceValue(kind) {
        const performance = this.performanceData.find(data => data.kind === kind);
        return performance ? performance.value : null;
    }
}
export default UserPerformance