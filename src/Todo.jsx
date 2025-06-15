import { useState } from "react";

export default function TodoList() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState("");

  const ajouterTache = () => {
    if (nouvelleTache.trim() !== "") {
      setTaches([...taches, nouvelleTache]);
      setNouvelleTache("");
    }
  };

  const supprimerTache = (index) => {
    const nouvelleListe = taches.filter((_, i) => i !== index);
    setTaches(nouvelleListe);
  };

  // Couleurs alternées pour les tâches
  const getTaskColor = (index) => {
    return index % 2 === 0 
      ? { backgroundColor: '#e3f2fd' }  // Bleu très clair
      : { backgroundColor: '#f5f5f5' };  // Gris très clair
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '25px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#1976d2',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '24px'
      }}>Ma Todo List</h2>
      
      <div style={{
        display: 'flex',
        marginBottom: '25px',
        gap: '10px'
      }}>
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && ajouterTache()}
          style={{
            flex: 1,
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '6px',
            fontSize: '16px',
            outline: 'none',
            ':focus': {
              borderColor: '#1976d2'
            }
          }}
        />
        <button 
          onClick={ajouterTache}
          style={{
            padding: '12px 20px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            ':hover': {
              backgroundColor: '#1565c0',
              transform: 'translateY(-2px)'
            }
          }}
        >
          +
        </button>
      </div>
      
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {taches.map((tache, index) => (
          <li 
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 15px',
              marginBottom: '10px',
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              ...getTaskColor(index), // Application de la couleur alternée
              transition: 'all 0.3s',
              ':hover': {
                transform: 'translateX(5px)'
              }
            }}
          >
            <span style={{ 
              flex: 1,
              color: '#333',
              fontSize: '16px'
            }}>
              {tache}
            </span>
            <button 
              onClick={() => supprimerTache(index)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#ff5252',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginLeft: '10px',
                transition: 'all 0.3s',
                ':hover': {
                  backgroundColor: '#d32f2f',
                  transform: 'scale(1.05)'
                }
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      
      {taches.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: '#757575',
          fontStyle: 'italic',
          padding: '20px',
          backgroundColor: '#fafafa',
          borderRadius: '6px'
        }}>
          Aucune tâche pour le moment. Ajoutez votre première tâche !
        </p>
      )}
    </div>
  );
}