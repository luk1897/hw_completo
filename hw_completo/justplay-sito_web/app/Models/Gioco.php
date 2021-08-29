<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Gioco extends Model
    {
        
        protected $table = 'gioco';
        protected $primaryKey='codice';

        public function informazioni() 
        {
            return $this->hasMany("App\Models\Informazioni");
        }
        
        public function carrello() 
        {
            return $this->hasMany("App\Models\Carrello");
        }
        
    }

?>