class PerformanceModel {
  constructor({ userId, kind, data }) {
      this.userId = userId;
      const kindMap = {
          1: 'Cardio',
          2: 'Énergie',
          3: 'Endurance',
          4: 'Force',
          5: 'Vitesse',
          6: 'Intensité',
      };
      this.kind = kind;
      this.data = data.map((d) => ({
          ...d,
          kind: kindMap[d.kind] || d.kind, // Utilise la traduction s'il y en a une, sinon utiliser la valeur originale
      }));
  }
}

export default PerformanceModel;
