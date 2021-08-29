<?php
    namespace App\Models;
    
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        protected $hidden = ['password'];
        protected $table = 'cliente';
        protected $primaryKey='codice';

        protected $fillable = [
            'username',
            'email',
            'password',
            'nome',
            'cognome',
            'data_nascita'
        ];


        public function informazioni(){
            return $this->hasMany('App\Models\Informazioni');
        }

        public function carrello(){
            return $this->hasMany('App\Models\Carrello');
        }

        public function card(){
            return $this->belongsToMany("App\Models\Card");
        }

        public function cDB(){
            return $this->belongsToMany("App\Models\Card",'cliente_carta','carta','cliente');
        }
    }
?>
