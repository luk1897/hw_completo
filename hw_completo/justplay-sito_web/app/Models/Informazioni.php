<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Informazioni extends Model
    {

        protected $table = 'informazioni';
        

        protected $fillable = [
            'id',
            'codice_cliente',
            'codice_gioco',  
            'spesa_cliente', 
            'created_at',
            'updated_at'
        ];

        public function user()
        {
            return $this->belongsTo("App\Models\User","codice_cliente");
        }

        public function gioco()
        {
            return $this->belongsTo("App\Models\Gioco","codice_gioco");
        }


    }
?>