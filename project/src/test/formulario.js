import styles from 'formulario.module.css';
function SignupForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Date.now(),  // Usado como ID temporário
          name,
          email,
          borrowedBooks: []
        })
      });
      // Redirecionar ou fornecer feedback ao usuário
    };
  
    return (
      <form onSubmit={handleSignup}>
        <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Criar Conta</button>
      </form>
    );
  }  